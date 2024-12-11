import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./MonduleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules = [] } = useSelector((state: any) => state.modulesReducer || { modules: [] });
  const dispatch = useDispatch();

  const parseLessons = (module: any) => {
    if (typeof module.lessons === 'string') {
      try {
        return {
          ...module,
          lessons: JSON.parse(module.lessons)
        };
      } catch (e) {
        console.error("Error parsing lessons:", e);
        return module;
      }
    }
    return module;
  };

  const removeModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
      fetchModules();
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const createModule = async (module: any) => {
    try {
      const newModule = await modulesClient.createModule(cid as string, module);
      dispatch(addModule(parseLessons(newModule)));
      fetchModules();
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  const fetchModules = async () => {
    try {
      const modules = await modulesClient.findModulesForCourse(cid as string);
      dispatch(setModules(modules.map(parseLessons)));
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const saveModule = async (module: any) => {
    try {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
      fetchModules();
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
        createModule({ name: moduleName, course: cid });
        setModuleName("");
      }}/><br /><br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => {
            const parsedModule = parseLessons(module);
            return (
              <li key={parsedModule._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {!parsedModule.editing && parsedModule.name}
                  {parsedModule.editing && (
                    <input className="form-control w-50 d-inline-block"
                      onChange={(e) => dispatch(updateModule({ ...parsedModule, name: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...parsedModule, editing: false });
                        }
                      }}
                      value={parsedModule.name} />
                  )}
                  <ModuleControlButtons
                    moduleId={parsedModule._id}
                    deleteModule={removeModule}
                    editModule={(moduleId: string) => dispatch(editModule(moduleId))} />
                </div>
                {parsedModule.lessons && Array.isArray(parsedModule.lessons) && parsedModule.lessons.length > 0 && (
                  <ul className="wd-lessons list-group rounded-0">
                    {parsedModule.lessons.map((lesson: any) => (
                      <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
  

