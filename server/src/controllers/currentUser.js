import { logger } from "../config/logger.js";
import { getCurrentUserById } from "../services/index.js";

 export const getcurrentUser = async (req, res) =>{
    try {
        const userId = req.user._id;
        if(!userId){
            return res.status(400).json({
                success: false,
                message: 'Not authenticiated'
            });
        }
       const user = await getCurrentUserById(userId) 
       res.status(400).json({
        id: user._id,
        email: user.email,
        role: user.role,
        profile: user.profile
       })
        
    } catch (error) {
        logger.error('Error fetching current user:', error.message);
        res.status(500).json({
          success: false,
          message: 'Failed to fetch user details',
          error: error.message
    })
}
}