import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'
import sharp from 'sharp'

@Controller('file')
export class FileController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    const image = sharp(file.buffer).jpeg({ quality: 40 })
    const data = await image.toBuffer()

    res.set('Content-Disposition', `attachment; filename="dest.jpg"`)
    res.send(data)
  }
}
