export type EnumLike<Enum, Value> = Record<keyof Enum, Value>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RecursiveReadonlyArray<ItemType>
 extends ReadonlyArray<ItemType | RecursiveReadonlyArray<ItemType>> {}

export type BitFieldResolvable<Flags extends string, Type extends number | bigint> =
 | RecursiveReadonlyArray<Flags | Type | `${bigint}` | Readonly<BitField<Flags, Type>>>
 | Flags
 | Type
 | `${bigint}`
 | Readonly<BitField<Flags, Type>>;

/**
 * Data structure that makes it easy to interact with a bitfield.
 */
export default class BitField<Flags extends string, Type extends number | bigint = number> {
 /**
  * Numeric bitfield flags.
  * <info>Defined in extension classes</info>
  * @type {Object}
  * @memberof BitField
  * @abstract
  */
 Flags: EnumLike<unknown, number | bigint> = {};

 /**
  * @type {number|bigint}
  * @memberof BitField
  * @private
  */
 static DefaultBit = 0;

 public bitfield: Type;

 /**
  * @param {BitFieldResolvable} [bits=BitField.DefaultBit] Bit(s) to read from
  */
 constructor(
  bits: BitFieldResolvable<Flags, Type> = BitField.DefaultBit as BitFieldResolvable<Flags, Type>,
 ) {
  /**
   * Bitfield of the packed bits
   * @type {number|bigint}
   */
  this.bitfield = this.resolve(bits) as Type;
 }

 /**
  * Checks whether the bitfield has a bit, or any of multiple bits.
  * @param {BitFieldResolvable} bit Bit(s) to check for
  * @returns {boolean}
  */
 any(bit: BitFieldResolvable<Flags, Type>) {
  // @ts-expect-error
  return (this.bitfield & this.resolve(bit)) !== BitField.DefaultBit;
 }

 /**
  * Checks if this bitfield equals another
  * @param {BitFieldResolvable} bit Bit(s) to check for
  * @returns {boolean}
  */
 equals(bit: BitFieldResolvable<Flags, Type>) {
  return this.bitfield === this.resolve(bit);
 }

 /**
  * Checks whether the bitfield has a bit, or multiple bits.
  * @param {BitFieldResolvable} bit Bit(s) to check for
  * @returns {boolean}
  */
 has(bit: BitFieldResolvable<Flags, Type>) {
  // @ts-expect-error
  bit = this.resolve(bit);
  // @ts-expect-error
  return (this.bitfield & bit) === bit;
 }

 /**
  * Gets all given bits that are missing from the bitfield.
  * @param {BitFieldResolvable} bits Bit(s) to check for
  * @param {...*} hasParams Additional parameters for the has method, if any
  * @returns {string[]}
  */
 missing(bits: BitFieldResolvable<Flags, Type>, ...hasParams: readonly unknown[]): Flags[] {
  return new BitField(bits).remove(this).toArray(...hasParams) as Flags[];
 }

 /**
  * Freezes these bits, making them immutable.
  * @returns {Readonly<BitField>}
  */
 freeze() {
  return Object.freeze(this);
 }

 /**
  * Adds bits to these ones.
  * @param {...BitFieldResolvable} [bits] Bits to add
  * @returns {BitField} These bits or new BitField if the instance is frozen.
  */
 add(...bits: BitFieldResolvable<Flags, Type>[]): BitField<Flags, Type> {
  let total = BitField.DefaultBit;
  // eslint-disable-next-line no-restricted-syntax
  for (const bit of bits) {
   // @ts-expect-error
   total |= this.resolve(bit);
  }
  if (Object.isFrozen(this)) return new BitField(this.bitfield | total) as BitField<Flags, Type>;
  // @ts-expect-error
  this.bitfield |= total;
  return this;
 }

 /**
  * Removes bits from these.
  * @param {...BitFieldResolvable} [bits] Bits to remove
  * @returns {BitField} These bits or new BitField if the instance is frozen.
  */
 remove(...bits: BitFieldResolvable<Flags, Type>[]) {
  let total = BitField.DefaultBit;
  // eslint-disable-next-line no-restricted-syntax
  for (const bit of bits) {
   // @ts-expect-error
   total |= this.resolve(bit);
  }
  if (Object.isFrozen(this)) return new BitField(this.bitfield & ~total);
  // @ts-expect-error
  this.bitfield &= ~total;
  return this;
 }

 /**
  * Gets an object mapping field names to a {@link boolean} indicating whether the
  * bit is available.
  * @param {...*} hasParams Additional parameters for the has method, if any
  * @returns {Object}
  */
 serialize(...hasParams: readonly unknown[]): Record<Flags, boolean> {
  const serialized = {};
  // @ts-expect-error
  // eslint-disable-next-line no-restricted-syntax
  for (const [flag, bit] of Object.entries(BitField.Flags)) {
   // @ts-expect-error
   if (Number.isNaN(flag)) serialized[flag] = this.has(bit, ...hasParams);
  }
  // @ts-expect-error
  return serialized;
 }

 /**
  * Gets an {@link Array} of bitfield names based on the bits available.
  * @param {...*} hasParams Additional parameters for the has method, if any
  * @returns {string[]}
  */
 toArray(...hasParams: readonly unknown[]) {
  return [...this[Symbol.iterator](...hasParams)];
 }

 toJSON() {
  return typeof this.bitfield === 'number' ? this.bitfield : this.bitfield.toString();
 }

 valueOf() {
  return this.bitfield;
 }

 // eslint-disable-next-line generator-star-spacing
 *[Symbol.iterator](...hasParams: readonly unknown[]): IterableIterator<Flags> {
  // @ts-expect-error
  // eslint-disable-next-line no-restricted-syntax
  for (const bitName of Object.keys(BitField.Flags)) {
   // @ts-expect-error
   if (Number.isNaN(bitName) && this.has(bitName, ...hasParams)) yield bitName;
  }
 }

 /**
  * Data that can be resolved to give a bitfield. This can be:
  * * A bit number (this can be a number literal or a value taken from {@link BitField.Flags})
  * * A string bit number
  * * An instance of BitField
  * * An Array of BitFieldResolvable
  * @typedef {number|string|bigint|BitField|BitFieldResolvable[]} BitFieldResolvable
  */

 /**
  * Resolves bitfields to their numeric form.
  * @param {BitFieldResolvable} [bit] bit(s) to resolve
  * @returns {number|bigint}
  */
 resolve(bit: BitFieldResolvable<string, number | bigint>): number | bigint {
  // @ts-expect-error
  const { DefaultBit } = this;

  // @ts-expect-error
  if (typeof DefaultBit === typeof bit && (bit as number | bigint) >= this.DefaultBit) {
   if (bit instanceof BitField) return bit.bitfield;
   if (Array.isArray(bit)) {
    return (
     bit
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((bit_: any) => this.resolve(bit_))
      .reduce((prev, bit_) => (prev as bigint) | (bit_ as bigint), DefaultBit)
    );
   }
   if (typeof bit === 'string') {
    if (!Number.isNaN(bit)) return typeof DefaultBit === 'bigint' ? BigInt(bit) : Number(bit);
    // @ts-expect-error
    if (this.Flags[bit] !== undefined) return this.Flags[bit];
   }
   throw new Error('BitField out of range', { cause: bit });
  }
  throw new Error('Unknown BitField error', { cause: bit });
 }
}
