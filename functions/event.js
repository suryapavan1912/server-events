import eventinfo from "../mongoose_schemas/event.js";

export const allevents = async (req,res) => {
    try {
        const filters = req.query;
        const events = await eventinfo.find(filters)
        res.json(events)
    } catch (err) {
        console.log(err.message);
    }
}

export const event = async (req,res) => {
    try {
        const id = req.params.id;
        const event = await eventinfo.findById(id)
        res.json(event)
    } catch (err) {
        console.log(err.message);
    }
}

export const newevent = async (req,res) => {
        const data = req.body;
        const newevent = new eventinfo(data)
    try {
        await newevent.save()
        res.json()
    } catch (err) {
        console.log(err.message);
    }
}