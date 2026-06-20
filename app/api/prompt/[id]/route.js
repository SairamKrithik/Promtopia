import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'
//GET
export const GET = async (req, { params }) => {
    try {
        await connectToDB()

        const { id } = await params

        const prompts = await Prompt.findById(id).populate('creator')

        if(!prompts) {return new Response("Prompt not found", {status: 404})}

        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        console.error(error)
        return new Response("Failed to fetch all prompts", {
            status: 500
        })
    }
}
//PATCH
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json()
    try {
        await connectToDB()
        const { id } = await params

        const existingPrompt = await Prompt.findById(id)

        if(!existingPrompt) {return new Response("Prompt not found", {status: 404})}

        existingPrompt.prompt = prompt
        existingPrompt.tag = tag
        await existingPrompt.save()

        return new Response(JSON.stringify(existingPrompt), {status: 200})
    } catch (error) {
        console.error(error)
        return new Response("Failed to update prompt", {status: 500})
    }
}
//DELETE
export const DELETE = async (req, { params }) => {
    try {
        await connectToDB()
        const { id } = await params
        await Prompt.findByIdAndDelete(id)
        return new Response("Prompt deleted successfully", {status: 200})
    } catch (error) {
        console.error(error)
        return new Response("Failed to delete prompt", {status: 500})
    }
}