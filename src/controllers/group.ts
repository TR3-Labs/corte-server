import { ObjectId } from 'mongodb';
import { GroupDocument } from '../interfaces/document';
import Group from '../models/Group';
import User from '../models/User';

// Add a new group
export const addGroup = async (groupName: string, participants: Array<string>): Promise<GroupDocument> => {
    const id: ObjectId = new ObjectId();
    console.log({ id })
    try {
        const res = await Promise.all([await new Group({
            id,
            name: groupName,
            participants
        }).save(), await User.updateMany(
            { _id: { $in: participants } },
            { $push: { joinedGroups: id } }
        )]);
        console.log(res)

        return res[0];
        // 1. Make a new group and add the user as participant.
        // 2. Update groups joined by that user
    }
    catch (error) {
        console.log('Add group error', error);
        return error;
    }
}

// Get group details
export const getGroup = async (groupId: string): Promise<GroupDocument | null> => {
    try {
        return await Group.findById(groupId).populate('participants');
    }
    catch (error) {
        return error;
    }
}