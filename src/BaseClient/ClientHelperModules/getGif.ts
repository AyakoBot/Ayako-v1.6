import * as Discord from 'discord.js';
import * as Neko from 'nekos-best.js';
import WaifuPics, { SFWCategories as WaifuGifNames } from 'waifu-pics-api';
import PurrBot from 'purrbot-api';
import languageSelector from './languageSelector.js';
import colorSelector from './colorSelector.js';
import replyCmd from './replyCmd.js';
import objectEmotes from './objectEmotes.js';

const neko = new Neko.Client();

const hardcodedGifs = {
 ayaya: [
  'https://cdn.discordapp.com/attachments/760152457799401532/825768450932211732/tenor_54.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825768451192127518/tenor_56.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825768451582853160/tenor_55.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825768454195904522/tenor_52.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825768452718460959/tenor_53.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825768454724124712/tenor_57.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825768456070103040/tenor_51.gif',
 ],
 bath: [
  'https://c.tenor.com/zpqP_RbvWQEAAAAd/couples-sweet.gif',
  'https://c.tenor.com/QGrKnjDkhjMAAAAC/bath-tub.gif',
  'https://c.tenor.com/bgPDDNuCXE8AAAAC/bath-tub.gif',
  'https://c.tenor.com/13C980rvvOAAAAAC/bathing-anime.gif',
  'https://c.tenor.com/De2M2efiEYUAAAAC/kono-suba-chomusuke.gif',
  'https://c.tenor.com/99ThCiFu8YEAAAAC/anime-kawaii.gif',
  'https://c.tenor.com/ACcFJyql1VoAAAAC/hayasaka-ai-kaguya-sama.gif',
  'https://c.tenor.com/WKPCniX30KMAAAAd/funami-yui-anime.gif',
 ],
 handshake: [
  'https://c.tenor.com/0tgfyrFJc24AAAAd/nakanohito-genome-jikkyouchuu-the-ones-within.gif',
  'https://c.tenor.com/rvHfRNhBTEAAAAAd/polt-polt-kobold.gif',
  'https://c.tenor.com/Mr_UAoDYroQAAAAC/anime-animes-shoujo.gif',
  'https://c.tenor.com/ihFADgl0zqoAAAAC/makeout-handshake.gif',
  'https://c.tenor.com/NUK_dpuFZ9gAAAAC/inazuma-eleven-ina11.gif',
  'https://c.tenor.com/4yWFhsgqzfEAAAAC/anime-handshake.gif',
  'https://c.tenor.com/y3Xt8P99CzMAAAAC/handshake-yu-narukami.gif',
  'https://c.tenor.com/rmklzHMYy80AAAAC/nichijou-anime.gif',
 ],
 kidnap: [
  'https://c.tenor.com/6oV95jWO_6gAAAAC/loli-steals-loli.gif',
  'https://c.tenor.com/0Wzg7M2v_bwAAAAC/closet-kidnapping.gif',
  'https://c.tenor.com/mabGQZaavQsAAAAC/cross-ange-kidnap.gif',
  'https://c.tenor.com/PtHyjUzSV4IAAAAC/shugo-chara-kidnap.gif',
  'https://c.tenor.com/tsU1bkxP40sAAAAC/bento-knock-out.gif',
 ],
 lewd: [
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863677802762260/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863678146683012/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863678532554904/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863678939418654/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863679400779886/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863679803428925/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863680130601032/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863680726179932/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863681074303047/1684444096108219382.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863691769778256/1684444103108226208.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863692151468052/1684444103108226208.gif',
 ],
 lift: [
  'https://c.tenor.com/a4vjO1o0hewAAAAd/puuung-puung.gif',
  'https://c.tenor.com/xlW3RF3bzo8AAAAC/banished-from-the-heros-party-red.gif',
  'https://c.tenor.com/W4Voi07VHcsAAAAC/anime-josee.gif',
 ],
 lurk: [
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864566173114378/1684444306108429866.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864552512274622/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864553061712002/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864553565044736/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864550998114364/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864551522410526/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864551971192882/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864548741599242/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864549379113071/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864550251548753/1684444303108426337.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108864548196335727/1684444303108426337.gif',
 ],
 nuzzle: [
  'https://cdn.discordapp.com/attachments/760152457799401532/958828511899041912/anime-anime-hug_1.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828512373010522/love-animecute.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828512821792808/cuddle-anime_2.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828513375436840/imouto-cuddle-imouto-sleeping.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828514130423898/strugglesnuggle-annoyed.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828515468410910/anime-hug-hug.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828516080758814/cuddle-anime_1.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828516445655080/cuddle-anime-hug-anime.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828516932190340/cuddle-anime.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828517259370546/goodnight-bed.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828552642494464/anime-anime-hug.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828553049366578/anime-couple-anime-blush.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828553535889479/snuggle-anime.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828553795944578/hug-anime.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828554332799076/anime-snuggle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828554630619196/anime-cuddle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958828554940977192/dragon-hug.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830112885841970/anime-couples.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830113259126825/anime-hug-anime-nekopara.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830113703735326/anime-nuzzle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830113993162782/anime-nose.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830114370625606/love-you-kiss.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830114945237042/anime-hug-nuzzle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830115238858782/anime-cuddle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830115486318662/anime-toyama-kasumi.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830115809288222/hugging-snuggle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830116182556702/bffs-anime.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830144598990848/snuggles-hug.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830145320394752/kobayashisan-chi.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830145882427472/anime-priconne.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830146519969832/anime-nuzzle_1.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830146897469450/anime-cuddle_1.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830147514011698/nagisa-furukawa.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830148759740486/anime-cuddle_2.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958830149120434206/anime-kanna-anime.gif',
 ],
 nya: [
  'https://cdn.discordapp.com/attachments/760152457799401532/825788696631574608/tenor_74.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788700628746240/tenor_65.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788699462991912/tenor_69.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788700562554900/tenor_73.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788700834660352/tenor_68.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788702323376158/tenor_67.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788713640001595/tenor_71.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788705046396948/tenor_66.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825788702071455744/tenor_70.gif',
 ],
 peck: [
  'https://cdn.discordapp.com/attachments/713915203280175115/713937394696716358/Fua_z4D1yIP.gif',
  'https://cdn.discordapp.com/attachments/713915203280175115/713937439420317767/us-yTvBGvqg.gif',
  'https://cdn.discordapp.com/attachments/713915203280175115/713937422504820837/nmLPCf5QtoJ.gif',
  'https://cdn.discordapp.com/attachments/713915203280175115/713937418394271784/CezoGn-h5wp.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863199597563914/1684443984108107974.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863199991840909/1684443984108107974.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863200570658897/1684443984108107974.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863201115901982/1684443984108107974.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108863201522761728/1684443984108107974.gif',
 ],
 quack: [
  'https://cdn.discordapp.com/attachments/760152457799401532/963955474313654333/duckface-bird.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955474603065344/ducking-ducks.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955474951208990/duck-run.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955481750143017/quack-duck.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955482249273344/cute-duck.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955482844860506/smile-duck-duck.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955483574689862/cute-duck-cuddle.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955484665217104/duck-soft-duck.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955485474713670/ducks-swim.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955485843804280/ducks-duck.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955486359691274/sleepy-duck.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955487005638706/duck-ducks.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/963955487441817610/duck-quack.gif',
 ],
 run: [
  'https://c.tenor.com/q80PMcmrxDwAAAAd/anime-girl.gif',
  'https://c.tenor.com/W_0ux9exhhwAAAAC/machikado-mazoku-running-away.gif',
  'https://c.tenor.com/-VmxvlLeivoAAAAC/yashiro-nene-jibaku-shounen-hanako-kun.gif',
  'https://c.tenor.com/zD2iXGCoujkAAAAC/ganbaruby-run.gif',
  'https://c.tenor.com/Zgg2MkMiYcsAAAAC/fruits-basket-fruba.gif',
  'https://c.tenor.com/G2YT33dvNjQAAAAC/anime.gif',
  'https://c.tenor.com/Xyl5bNpBCVsAAAAd/sumi-cute.gif',
  'https://c.tenor.com/E92g-rwBrvkAAAAC/anime-runaway.gif',
  'https://c.tenor.com/x91zb9XYaiQAAAAd/anime-girl.gif',
  'https://c.tenor.com/Vuu21qfS4wcAAAAC/maki-natsuo-love-lab.gif',
  'https://c.tenor.com/mUIXigPWPuYAAAAd/anime-anime-girl-running.gif',
  'https://c.tenor.com/MMA6_WvqS60AAAAC/escape-im-out.gif',
 ],
 scream: [
  'https://cdn.discordapp.com/attachments/760152457799401532/776086273042546698/tenor_20.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086274170814494/tenor_19.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086273278214184/tenor_21.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086277053218866/tenor_17.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086276775477258/tenor_18.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086279745437706/tenor_16.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086282681581628/tenor_15.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086283893080064/tenor_14.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776086287554969680/tenor_13.gif',
 ],
 shake: [
  'https://cdn.discordapp.com/attachments/760152457799401532/776095817290612756/tenor_29.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095821212680210/tenor_28.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095822768242778/tenor_26.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095828065779722/tenor_23.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095828220706816/tenor_22.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095832200970250/tenor_25.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095836420571186/tenor_24.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/776095821199704114/tenor_27.gif',
 ],
 thighsleep: [
  'https://cdn.weeb.sh/images/rytzGAE0W.gif',
  'https://media.tenor.com/images/9d14fa4b551c7d42ca84d8d02d9dc7f2/tenor.gif',
  'https://media.tenor.com/images/cdc11b08698043e8e305487f8414defa/tenor.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/774529670896025600/tenor_11.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840593889521714/anime-lap-pillow.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840592534741063/comfort-hair.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840594006962197/adachi-and-shimamura-head.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840593033879583/head-pat_1.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840593486860298/pink-head.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840594350882846/anime-sad.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840594606751754/anime-love.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840595147796520/lay-on-lap-relaxing.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840595344920586/head-pat.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840596016021555/anime-sleepy.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/958840596276084746/cat-kitten.gif',
 ],
 woof: [
  'https://cdn.discordapp.com/attachments/760152457799401532/825773975815979028/tenor_64.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825773976747507822/tenor_62.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825773979162640384/tenor_61.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825773976374345728/tenor_63.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825773981973479455/tenor_59.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825773982321737768/tenor_60.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/825773984963756072/tenor_58.gif',
 ],
 yawn: [
  'https://c.tenor.com/ZTefiXlB014AAAAC/azusa-aizawa-azusa.gif',
  'https://c.tenor.com/Hd82RDOW6eQAAAAC/sleepy-princess-in-the-demon-castle-yawn.gif',
  'https://c.tenor.com/42weIHDogZAAAAAC/sleepy-yawn.gif',
  'https://c.tenor.com/4NJxOud5u6oAAAAC/anime-yawn.gif',
  'https://c.tenor.com/niGm9n9NZ0EAAAAC/yuudachi-yawn.gif',
  'https://c.tenor.com/K2KUkN5GPjUAAAAd/yawn-stretch.gif',
  'https://c.tenor.com/_IBaj604zp8AAAAC/tired-kon.gif',
  'https://c.tenor.com/DqkI-wUFAqcAAAAC/little-witch-academia-witch.gif',
  'https://c.tenor.com/_addNtAQwPoAAAAC/aaa.gif',
  'https://c.tenor.com/EnIzuqL-0ykAAAAC/anime-yawn.gif',
  'https://c.tenor.com/Pu42qpMGiusAAAAd/anime-girl.gif',
  'https://c.tenor.com/re6eeBTnXcsAAAAC/iruru-ilulu.gif',
  'https://c.tenor.com/jrXZjws5IVwAAAAC/azusa-aizawa-azusa.gif',
  'https://c.tenor.com/viXhLyvelpkAAAAC/tanaka-kun-sleepy.gif',
  'https://c.tenor.com/oKfXYxzcx6QAAAAC/rin-shelter.gif',
  'https://c.tenor.com/qMCuD1d-UmYAAAAC/jamie-anime.gif',
  'https://c.tenor.com/pXLDlms6KakAAAAd/anime-good-morning.gif',
  'https://c.tenor.com/ra1eKneb4gcAAAAC/sleepy-nichijou.gif',
  'https://c.tenor.com/jv-3NEyxpBwAAAAd/anime-yawning.gif',
  'https://c.tenor.com/fBOhx_wbz1kAAAAC/yawn-tired.gif',
  'https://c.tenor.com/YDV4jEpOF1oAAAAC/nadeshiko-yawn.gif',
  'https://c.tenor.com/1UjVG4tHsPQAAAAC/lucky-star-yawn.gif',
 ],
 nom: [
  'https://images-ext-2.discordapp.net/external/hMN0jfdNLYH_JmIltn50v_kbxbVPmg7LEycbgz7AuX8/%3Fitemid%3D15735907/https/media1.tenor.com/images/5878c0995fcf89352ff13189ee61f303/tenor.gif',
  'https://images-ext-1.discordapp.net/external/QXlArNhRqGqvKQVQdmMDLzzM0bo1UnBfw502sW-rgOQ/https/cdn.weeb.sh/images/H1hige7sZ.gif',
  'https://cdn.weeb.sh/images/HJmbWxmiZ.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108865177174147143/1684444455108578638.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108865177673285723/1684444455108578638.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108865178189168851/1684444455108578638.gif',
  'https://cdn.discordapp.com/attachments/760152457799401532/1108865178654752789/1684444455108578638.gif',
 ],
};

const getRandom = (arr: string[]) => arr[Math.ceil(Math.random() * (arr.length - 1))];

export type ReturnType<T extends 'gif' | 'img'> = {
 img: { artist?: string; source?: string; url: string; artistUrl?: string };
 gif: { anime_name?: string; url: string };
}[T];

const getGif = async <T extends 'gif' | 'img'>(
 gifName: string,
 type: ('purr' | 'neko' | 'hardcoded' | 'waifu')[],
): Promise<ReturnType<T>> => {
 switch (type[Math.ceil(Math.random() * (type.length - 1))]) {
  case 'purr': {
   const functionToCall = ['img', 'gif'][Math.floor(Math.random() * 2)] ?? 'img';
   return {
    url: await PurrBot.sfw.categories[gifName as keyof typeof PurrBot.sfw.categories](
     functionToCall as 'gif' | 'img',
    ),
   };
  }
  case 'neko': {
   const res = (await neko.fetch(gifName as Neko.NbCategories, 1)).results[0];
   return 'anime_name' in res
    ? { url: res.url, anime_name: res.anime_name }
    : { url: res.url, artist: res.artist_name, source: res.source_url, artistUrl: res.artist_href };
  }
  case 'waifu': {
   return { url: await WaifuPics(gifName as WaifuGifNames) };
  }
  case 'hardcoded': {
   return { url: getRandom(hardcodedGifs[gifName as keyof typeof hardcodedGifs]) };
  }
  default: {
   throw new Error('Invalid type');
  }
 }
};

const gifSelection = [
 { triggers: ['awoo'], gifs: async () => getGif('awoo', ['waifu']) },
 { triggers: ['angry'], gifs: async () => getGif('angry', ['purr']) },
 { triggers: ['bath'], gifs: async () => getGif('bath', ['hardcoded']) },
 { triggers: ['ayaya'], gifs: async () => getGif('ayaya', ['hardcoded']) },
 { triggers: ['baka'], gifs: async () => getGif('baka', ['neko']) },
 { triggers: ['bite'], gifs: async () => getGif('bite', ['neko', 'purr', 'waifu']) },
 { triggers: ['blush'], gifs: async () => getGif('blush', ['neko', 'purr', 'waifu']) },
 { triggers: ['bonk'], gifs: async () => getGif('bonk', ['waifu']) },
 { triggers: ['bored'], gifs: async () => getGif('bored', ['neko']) },
 { triggers: ['comfy'], gifs: async () => getGif('comfy', ['purr']) },
 { triggers: ['cry'], gifs: async () => getGif('cry', ['neko', 'purr', 'waifu']) },
 { triggers: ['cuddle'], gifs: async () => getGif('cuddle', ['neko', 'purr', 'waifu']) },
 { triggers: ['dance'], gifs: async () => getGif('dance', ['neko', 'purr', 'waifu']) },
 { triggers: ['facepalm'], gifs: async () => getGif('facepalm', ['neko']) },
 { triggers: ['feed'], gifs: async () => getGif('feed', ['neko']) },
 { triggers: ['fluff'], gifs: async () => getGif('fluff', ['purr']) },
 { triggers: ['handshake'], gifs: async () => getGif('handshake', ['hardcoded']) },
 { triggers: ['happy'], gifs: async () => getGif('happy', ['neko', 'waifu']) },
 { triggers: ['highfive'], gifs: async () => getGif('highfive', ['neko', 'waifu']) },
 {
  triggers: ['handhold', 'holdhands'],
  gifs: async () => getGif('handhold', ['neko', 'waifu']),
 },
 {
  triggers: ['hug', 'comfort', 'hold'],
  gifs: async () => getGif('hug', ['neko', 'purr', 'waifu']),
 },
 { triggers: ['kidnap'], gifs: async () => getGif('kidnap', ['hardcoded']) },
 { triggers: ['laugh'], gifs: async () => getGif('laugh', ['neko']) },
 { triggers: ['lay'], gifs: async () => getGif('lay', ['purr']) },
 { triggers: ['lewd'], gifs: async () => getGif('lewd', ['hardcoded']) },
 { triggers: ['lick'], gifs: async () => getGif('lick', ['purr', 'waifu']) },
 { triggers: ['lift', 'pickup'], gifs: async () => getGif('lift', ['hardcoded']) },
 { triggers: ['lurk', 'peek'], gifs: async () => getGif('lurk', ['hardcoded']) },
 { triggers: ['nom', 'nam'], gifs: async () => getGif('nom', ['hardcoded']) },
 { triggers: ['nuzzle', 'snuggle'], gifs: async () => getGif('nuzzle', ['hardcoded']) },
 { triggers: ['nya', 'mew'], gifs: async () => getGif('nya', ['hardcoded']) },
 { triggers: ['pat'], gifs: async () => getGif('pat', ['neko', 'purr', 'waifu']) },
 { triggers: ['peck'], gifs: async () => getGif('peck', ['hardcoded']) },
 { triggers: ['poke', 'boop'], gifs: async () => getGif('poke', ['neko', 'purr', 'waifu']) },
 { triggers: ['pout', 'hmpf', 'hmph'], gifs: async () => getGif('pout', ['neko', 'purr']) },
 { triggers: ['quack'], gifs: async () => getGif('quack', ['hardcoded']) },
 { triggers: ['run'], gifs: async () => getGif('run', ['hardcoded']) },
 { triggers: ['scream'], gifs: async () => getGif('scream', ['hardcoded']) },
 { triggers: ['shake'], gifs: async () => getGif('shake', ['hardcoded']) },
 { triggers: ['shrug'], gifs: async () => getGif('shrug', ['neko']) },
 {
  triggers: ['slap', 'hit', 'punch'],
  gifs: async () => getGif('slap', ['neko', 'purr', 'waifu']),
 },
 { triggers: ['slap', 'hit', 'punch'], gifs: async () => getGif('punch', ['neko']) },
 { triggers: ['sleep', 'eep'], gifs: async () => getGif('sleep', ['neko']) },
 { triggers: ['smile'], gifs: async () => getGif('smile', ['neko', 'purr', 'waifu']) },
 { triggers: ['smug'], gifs: async () => getGif('smug', ['neko', 'waifu']) },
 { triggers: ['stare'], gifs: async () => getGif('stare', ['neko']) },
 { triggers: ['tail', 'wag', 'tailwag'], gifs: async () => getGif('tail', ['purr']) },
 { triggers: ['thighsleep', 'lapsleep'], gifs: async () => getGif('thighsleep', ['hardcoded']) },
 { triggers: ['think'], gifs: async () => getGif('think', ['neko']) },
 { triggers: ['thumbsup'], gifs: async () => getGif('thumbsup', ['neko']) },
 { triggers: ['tickle'], gifs: async () => getGif('tickle', ['neko', 'purr']) },
 { triggers: ['wave'], gifs: async () => getGif('wave', ['neko', 'waifu']) },
 { triggers: ['wink'], gifs: async () => getGif('wink', ['neko', 'waifu']) },
 { triggers: ['yeet'], gifs: async () => getGif('yeet', ['neko', 'waifu']) },
 { triggers: ['yawn'], gifs: async () => getGif('yawn', ['hardcoded']) },
 { triggers: ['woof'], gifs: async () => getGif('woof', ['hardcoded']) },
 {
  triggers: ['kiss', 'kith', 'smooch', 'pash'],
  gifs: async () => getGif('kiss', ['neko', 'purr', 'waifu']),
 },
 { triggers: ['shoot'], gifs: async () => getGif('shoot', ['neko']) },
 { triggers: ['waifu'], gifs: async () => getGif('waifu', ['neko', 'waifu']) },
 { triggers: ['husbando'], gifs: async () => getGif('husbando', ['neko']) },
 { triggers: ['eevee'], gifs: async () => getGif('eevee', ['purr']) },
 { triggers: ['holo'], gifs: async () => getGif('holo', ['purr']) },
 { triggers: ['icon'], gifs: async () => getGif('icon', ['purr']) },
 { triggers: ['kitsune'], gifs: async () => getGif('kitsune', ['purr', 'neko']) },
 { triggers: ['neko'], gifs: async () => getGif('neko', ['purr', 'neko', 'waifu']) },
 { triggers: ['okami'], gifs: async () => getGif('okami', ['purr']) },
 { triggers: ['senko'], gifs: async () => getGif('senko', ['purr']) },
 { triggers: ['shiro'], gifs: async () => getGif('shiro', ['purr']) },
 { triggers: ['nod'], gifs: async () => getGif('nod', ['neko']) },
 { triggers: ['nope'], gifs: async () => getGif('nope', ['neko']) },
 { triggers: ['shinobu'], gifs: async () => getGif('shinobu', ['waifu']) },
 { triggers: ['megumin'], gifs: async () => getGif('megumin', ['waifu']) },
 { triggers: ['bully'], gifs: async () => getGif('bully', ['waifu']) },
 { triggers: ['snuggle', 'cuddle'], gifs: async () => getGif('glomp', ['waifu']) },
 { triggers: ['kill'], gifs: async () => getGif('kill', ['waifu']) },
 { triggers: ['kick'], gifs: async () => getGif('kick', ['neko', 'waifu']) },
 { triggers: ['cringe'], gifs: async () => getGif('cringe', ['waifu']) },
];

export default gifSelection;

export const imageGetter = async (
 cmd: Discord.ChatInputCommandInteraction | Discord.ButtonInteraction,
) => {
 if (cmd.inGuild() && !cmd.inCachedGuild()) return;

 const commandName =
  cmd instanceof Discord.ChatInputCommandInteraction
   ? cmd.options.data.find((c) => c.type === Discord.ApplicationCommandOptionType.Subcommand)?.name
   : cmd.customId.split(/\//g)[1];
 if (!commandName) return;

 const imgGetter = gifSelection.find((g) => g.triggers.includes(commandName));
 const img = (await imgGetter?.gifs()) as ReturnType<'img'>;
 const language = await languageSelector(cmd.guildId);
 const lan = language.slashCommands.img;

 const payload: Discord.InteractionReplyOptions | Discord.InteractionUpdateOptions = {
  embeds: [
   {
    image: {
     url: img.url,
    },
    color: colorSelector(cmd.guild?.members.me),
    author: img.artist
     ? {
        name: lan.madeBy,
       }
     : undefined,
    title: img.artist as string,
    url: img.source as string,
   },
  ],
  components: [
   {
    type: Discord.ComponentType.ActionRow,
    components: [
     {
      type: Discord.ComponentType.Button,
      label: language.Refresh,
      custom_id: `images/${commandName}`,
      style: Discord.ButtonStyle.Primary,
      emoji: objectEmotes.refresh,
     } as Discord.APIButtonComponent,
    ],
   } as Discord.APIActionRowComponent<Discord.APIButtonComponent>,
   img.source
    ? ({
       type: Discord.ComponentType.ActionRow,
       components: [
        {
         type: Discord.ComponentType.Button,
         label: lan.viewArtist,
         style: Discord.ButtonStyle.Link,
         url: img.artistUrl as string,
        } as Discord.APIButtonComponent,
        {
         type: Discord.ComponentType.Button,
         label: lan.viewOriginal,
         style: Discord.ButtonStyle.Link,
         url: img.source as string,
        } as Discord.APIButtonComponent,
       ],
      } as Discord.APIActionRowComponent<Discord.APIButtonComponent>)
    : undefined,
  ].filter((c): c is Discord.APIActionRowComponent<Discord.APIButtonComponent> => !!c),
 };

 if (cmd instanceof Discord.ChatInputCommandInteraction) {
  replyCmd(cmd, payload as Discord.InteractionReplyOptions);
 } else cmd.update(payload as Discord.InteractionUpdateOptions);
};
