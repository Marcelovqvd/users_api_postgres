const getGoal = (request, response) => {
    return response.status(200).json({msg: 'Get goals'})
}

const setGoal = (request, response) => {
    return response.status(200).json({msg: 'Set goals'})
}

const updateGoal = (request, response) => {
  return response.status(200).json({msg: 'Update goals'})
}

const deleteGoal = (request, response) => {
  return response.status(200).json({msg: 'Delete goals'})
}

export { getGoal, setGoal, updateGoal, deleteGoal }
