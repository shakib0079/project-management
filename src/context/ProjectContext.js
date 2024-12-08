
import { createContext } from "react";

export const ProjectContext = createContext({
    projects: [
        {
            id: 1,
            title: "Learning React",
            description: "Learning react is the most critical things at first",
            createdAt: new Date(),
            projectTasks: [
                {
                    taskId: 1,
                    taskTitle: "React a javascript library"
                }
            ]
        }
    ],

    addProject: () => {},
    deleteProject: () => {},
    addTasks: () => {},
    deleteTasks: () => {}
})

export const ProjectContextProvier = ProjectContext.Provider;
