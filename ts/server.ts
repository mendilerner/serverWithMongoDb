import  express, {Application, NextFunction, Request, Response}  from "express";
import morgan from 'morgan'
import cors from 'cors';
import products from './api/products/router.products'

const PORT: number = 3000;
const app: Application = express()

app.use(cors())
app.use(morgan('common'))
app.use(express.json())

app.get('/', (req: Request, res :Response) => {
    res.send('API Deployed 🚀');
});

app.use('/api/products', products)

app.use((req : Request, res :Response, next: NextFunction) => {
    const err: any = new Error('page not found')
    next(err)
})

app.use((err : any, req: Request, res : Response, next: NextFunction) : void=> {
    res.status(500)
    res.json({
        error: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port:${PORT}`);

})