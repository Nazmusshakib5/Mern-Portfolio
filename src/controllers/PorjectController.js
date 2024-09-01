const {
    CreateProjectService,
    ReadProjectService,
    UpdateProjectService,
    DeleteProjectService,
    ReadProjectByIDService,
    ReadProjectBySimilaritiesService
}=require('../services/ProjectService')


exports.CreateProjects = async (req, res) => {
    const data = await CreateProjectService(req);
    return res.status(200).json(data)
}

exports.ReadProjects = async (req, res) => {
    const data = await ReadProjectService();
    return res.status(200).json(data)
}

exports.UpdateProjectByID = async (req, res) => {
    const data = await UpdateProjectService(req);
    return res.status(200).json(data)
}

exports.DeleteProjectByID = async (req, res) => {
    const data = await DeleteProjectService(req);
    return res.status(200).json(data)
}

exports.ReadProjectByID = async (req, res) => {
    const data = await ReadProjectByIDService(req);
    return res.status(200).json(data)
}

exports.ReadProjectBySimilarities = async (req, res) => {
    const data = await ReadProjectBySimilaritiesService(req);
    return res.status(200).json(data)
}