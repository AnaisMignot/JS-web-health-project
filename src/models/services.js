import api from "../utils/api";
import apiRoutes from "../utils/apiRoutes";

export async function getPeopleService() {
  return api.get(`${apiRoutes.people}`);
}
export async function getPhysiologicalDataService() {
  return api.get(`${apiRoutes.physiological}`);
}
export async function getPhysicalActivitiesService() {
  return api.get(`${apiRoutes.physical}`);
}
