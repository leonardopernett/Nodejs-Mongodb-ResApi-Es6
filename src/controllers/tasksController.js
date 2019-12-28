import {connection} from '../database'
import {ObjectID} from 'mongodb'

export async function index(req,res,next){
    const db =  await connection()
    const result = await db.collection('tasks').find({}).toArray()
    res.json(result)
}

export async function create(req,res,next){
    const db =  await connection()
     const task = {
         title: req.body.title,
         description: req.body.description
     }
     const result = await db.collection('tasks').insert(task)
    res.json(result.ops[0])

}

export async function remove(req,res, next){
    const db =  await connection()
    await db.collection('tasks').deleteOne({_id: ObjectID(req.params.id)})
    res.status(200).json({message:'taks deleted successfully'})

}

export async function getOne(req, res,next){
     const db     =  await connection()
     const result =  await db.collection('tasks').findOne({_id: ObjectID(req.params.id)})
     res.json(result)
}

export async function update(req,res,next){
    const db = await connection()
    const updateTask = {
        title:req.body.title,
        description: req.body.description
    }
   const result =  await db.collection('tasks').updateOne({_id:ObjectID(req.params.id)}, {$set: updateTask})
    res.json(result)
}