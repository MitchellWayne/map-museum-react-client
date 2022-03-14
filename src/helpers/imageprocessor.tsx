import Jimp from "jimp";

export async function toIcon(filepath: string): Promise<Buffer>{
  let imgbuffer: Buffer = Buffer.from(filepath);
  await Jimp.read(filepath)
    .then(async image => {
      image.cover(100, 100);
      image.scaleToFit(100, 100);
      imgbuffer = await image.getBufferAsync(Jimp.MIME_PNG);;
    })
    .catch(err => {
      console.log(err);
    })

  return imgbuffer;
}

export async function toStandard(file: File){
  console.log(file);
}