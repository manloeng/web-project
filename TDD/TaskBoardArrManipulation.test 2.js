const data = require("./task-groups");

const { taskBoardArrManipulation, taskBoardArrManipulationWithTaskOnDrop } = require("./taskBoardArrManipulation.js");

xdescribe("taskBoardArrManipulation()", () => {
  it("returns an empty Array when there are no tasks to drag", () => {
    const initial = taskBoardArrManipulation();
    expect(initial).toEqual({});
  });
  it("returns an object with the task status the when the task is dropped in the same place", () => {
    const input = {
      Todo: [
        {
          id: 1,
          task: "Tasks",
          length: "2 weeks",
          startDate: "01/03/2019",
          colour: "blue",
          status: "Todo"
        },
        {
          id: 2,
          task: "Chat",
          length: "1.5 months",
          startDate: "16/03/2019",
          colour: "red",
          status: "Todo"
        }
      ]
    };
    const selected = 1;
    const dropStatus = "Todo";
    const arrDropPos = 0;
    const initial = taskBoardArrManipulation(
      input,
      selected,
      dropStatus,
      arrDropPos
    );
    const expected = {
      Todo: [
        {
          id: 1,
          task: "Tasks",
          length: "2 weeks",
          startDate: "01/03/2019",
          colour: "blue",
          status: "Todo"
        },
        {
          id: 2,
          task: "Chat",
          length: "1.5 months",
          startDate: "16/03/2019",
          colour: "red",
          status: "Todo"
        }
      ]
    };
    expect(initial).toEqual(expected);
  });
  it("returns the the position of the selected tasks when a task is moved down the list by one", () => {
    const input = {
      Todo: [
        {
          id: 1,
          task: "Tasks",
          length: "2 weeks",
          startDate: "01/03/2019",
          colour: "blue",
          status: "Todo"
        },
        {
          id: 2,
          task: "Chat",
          length: "1.5 months",
          startDate: "16/03/2019",
          colour: "red",
          status: "Todo"
        }
      ]
    };
    const selected = 1;
    const dropStatus = "Todo";
    const arrDropPos = 1;
    const initial = taskBoardArrManipulation(
      input,
      selected,
      dropStatus,
      arrDropPos
    );
    const expected = {
      Todo: [
        {
          id: 2,
          task: "Chat",
          length: "1.5 months",
          startDate: "16/03/2019",
          colour: "red",
          status: "Todo"
        },
        {
          id: 1,
          task: "Tasks",
          length: "2 weeks",
          startDate: "01/03/2019",
          colour: "blue",
          status: "Todo"
        }
      ]
    };
    expect(initial).toEqual(expected);
  });
  it("returns the the position of the selected tasks to the end of the list when a task is moved to complete", () => {
    const input = data;
    const selected = 1;
    const dropStatus = "Complete";
    const arrDropPos = 0;
    const initial = taskBoardArrManipulation(
      input,
      selected,
      dropStatus,
      arrDropPos
    );
    const expected = {
      Todo: [
        {
          id: 2,
          task: "Chat",
          length: "1.5 months",
          startDate: "16/03/2019",
          colour: "red",
          status: "Todo"
        }
      ],
      Complete: [
        {
          id: 1,
          task: "Tasks",
          length: "2 weeks",
          startDate: "01/03/2019",
          colour: "blue",
          status: "Complete"
        },
        {
          id: 3,
          task: "Time Tracking",
          length: "1 month",
          startDate: "28/03/2019",
          colour: "orange",
          status: "Complete"
        }
      ]
    };
    expect(initial).toEqual(expected);
  });
});

describe("taskBoardArrManipulationWithTaskOnDrop()", () => {
  it("returns the the position of the selected tasks to the end of the list when a task is moved to complete", () => {
    const input = data;
    const selected = 1;
    const dropStatus = 'Complete';
    const taskOnDrop = 3;
    const initial = taskBoardArrManipulationWithTaskOnDrop(
      input,
      selected,
      dropStatus,
      taskOnDrop
    );
    const expected = {
      Todo: [
        {
          id: 2,
          task: "Chat",
          length: "1.5 months",
          startDate: "16/03/2019",
          colour: "red",
          status: "Todo"
        }
      ],
      Complete: [
        {
          id: 1,
          task: "Tasks",
          length: "2 weeks",
          startDate: "01/03/2019",
          colour: "blue",
          status: "Complete"
        },
        {
          id: 3,
          task: "Time Tracking",
          length: "1 month",
          startDate: "28/03/2019",
          colour: "orange",
          status: "Complete"
        }
      ]
    };
    expect(initial).toEqual(expected);
  });
})