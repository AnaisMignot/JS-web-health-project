import {
  getPeopleService,
  getPhysiologicalDataService,
  getPhysicalActivitiesService,
} from "../services";
import { checkConnexion, showErrorCnx } from "../../utils/internetCheck";

const initialState = {
  data: {},
  peoples: [],
  physiologicalData: [],
  physicalActivities: [],
  error: false,
  notFound: false,
  loading: false,
};

export default {
  namespace: "health",
  state: initialState,
  effects: {
    *fetchPeopleList(_, { call, put }) {
      console.log("fetchPeopleList");
      if (!checkConnexion()) {
        showErrorCnx();
      } else {
        try {
          const response = yield call(getPeopleService);
          if (response.status === 200) {
            yield put({
              type: "save",
              payload: {
                peoples: response.data.data,
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
    *fetchPhysiologicalData(_, { call, put }) {
      if (!checkConnexion()) {
        showErrorCnx();
      } else {
        try {
          const response = yield call(getPhysiologicalDataService);
          if (response.status === 200) {
            yield put({
              type: "save",
              payload: {
                physiologicalData: response.data.data,
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
    *fetchPhysicalActivities(_, { call, put }) {
      if (!checkConnexion()) {
        showErrorCnx();
      } else {
        try {
          const response = yield call(getPhysicalActivitiesService);
          if (response.status === 200) {
            yield put({
              type: "save",
              payload: {
                physicalActivities: response.data.data,
              },
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    reset() {
      return initialState;
    },
  },
};
