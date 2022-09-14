/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE examControllerGenerated.js PLEASE EDIT ../examController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import ExamModel from "../../../models/SchoolManagement_db/ExamModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ExamController from "../ExamController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/exam`;
    router.get(baseUrl + "/findBy_course/:key", authorize([]), ExamController.findBy_course);
    router.get(baseUrl + "/findBy_student/:key", authorize([]), ExamController.findBy_student);
    router.get(baseUrl + "/findBy_teacher/:key", authorize([]), ExamController.findBy_teacher);
    router.post(baseUrl + "/:id/validate", ExamController.validate);
  },


  // CRUD METHODS


  /**
  * examModel.findBy_course
  *   @description CRUD ACTION findBy_course
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_course: async (req, res) => {
    try {
      const result = await ExamModel.findBy_course(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_student: async (req, res) => {
    try {
      const result = await ExamModel.findBy_student(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * examModel.findBy_teacher
  *   @description CRUD ACTION findBy_teacher
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_teacher: async (req, res) => {
    try {
      const result = await ExamModel.findBy_teacher(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
    
  
  // Custom APIs

  /**
  * examModel.validate
  *   @description this is to validate the exam
  *   @param String id id of exam
  *   @returns Boolean
  *
  */
  validate: async (req, res) => {
    try {
      res.json({});
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

};

export default generatedControllers;
