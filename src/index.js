import express from 'express'
import { imagenes, pdf } from './multer.js'

const app = express()
const port = process.env.port || 3000

const uploadImagen = async (req, res) => {
  res.json({ message: 'Imagen subida con éxito' })
}

const pdfUpload = async (req, res) => {
  res.json({ message: 'Pdf subido con éxito' })
}

app.post('/imagenSuvida', imagenes.single('imagen'), uploadImagen)

app.post('/archivoPdf', pdf.single('pdf'), pdfUpload)

app.listen(port, console.log(`server running on http://localhost:${port}`))
