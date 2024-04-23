import multer from 'multer'

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, './uploads/')
  }
})

const storagePdf = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, './pdf/')
  }
})

const fileFilter = (req, file, cb) => {
  const archivosPermitidos = ['image/jpeg', 'image/png ']
  if (archivosPermitidos.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('solo se permiten imagenes y pdf', false))
  }
}

const fileFilterPdf = (req, file, cb) => {
  const archivosPermitidos = ['application/pdf']
  if (archivosPermitidos.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('solo se permiten pdf', false))
  }
}

export const imagenes = multer({ fileFilter, storage })
export const pdf = multer({ storagePdf, fileFilterPdf })
