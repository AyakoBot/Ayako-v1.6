import ms from 'ms';

export default (duration: string, max?: number) => {
 const args = duration.split(/\s+/g);
 const mergedDurationArgs: string[] = [];

 for (let i = 0; i < args.length; i += 1) {
  if (Number(args[i]) === ms(args[i])) {
   mergedDurationArgs.push(`${args[i]} ${args[i + 1]}`);
   i += 1;
   break;
  }

  mergedDurationArgs.push(args[i]);
 }

 const result = mergedDurationArgs
  .map((arg) => ms(arg))
  .reduce((partialSum, arg) => partialSum + arg, 0);

 if (max && result > max) return max;
 return result;
};
