import {Request, Response} from 'express';
import {ActiveUserInterface} from '../Data/Models/activeUsers';
import {updateActiveDataService} from '../Services';

export const postActiveData = async (req: Request, res: Response) => {
  const error = {
    statusCode: 500,
    message: 'Unknown',
  };

  try {
    const activeData = req.body.activeData as ActiveUserInterface;

    if (!activeData) {
      error.statusCode = 400;
      error.message = 'No active data provided';
      throw new Error(error.message);
    }

    await updateActiveDataService(activeData);
    return res.status(200).json({message: 'Active data has been set'});
  } catch (err) {
    console.log(`error: `, err);
    return res.status(error.statusCode).json({message: error.message});
  }
};