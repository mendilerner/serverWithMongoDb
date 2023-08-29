import  express, {Application, NextFunction, Request, Response}  from "express";
import morgan from 'morgan'
import cors from 'cors';

const PORT: number = 3000;
const app: Application = express()

app.use(cors())
app.use(morgan('common'))
app.use(express.json())

app.get('/', (req: Request, res :Response) => {
    res.send('API Deployed 🚀');
});

app.use((req : Request, res :Response, next: NextFunction) => {
    const err: any = new Error('page not found')
    next(err)
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port:${PORT}`);

})