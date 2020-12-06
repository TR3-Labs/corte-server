import {GroupDocument} from '../interfaces/document';
import Group from '../models/Group';
import User from '../models/User';

export const addGroup = async (groupName: string, userId: string): Promise<GroupDocument> => {
    try {
        // 1. Make a new group and add the user as participant.
        const newGroup = await new Group({
            name: groupName,
            participants: userId
        }).save();
        // 2. Update groups joined by that user
        await User.updateOne(
            { id: userId },
            { $push: { joinedGroups: newGroup.id } }
        )
        return newGroup;
    }
    catch(error) {
        console.log('Add group error');
        return error;
    }
}