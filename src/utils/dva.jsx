import { create } from "dva-core";
import { Provider } from "react-redux";

export default function createApp(options) {
  // Créez l'application Dva
  const app = create(options);

  // Démarrez l'application
  if (!global.registered) {
    options.models.forEach((model) => app.model(model));
  }
  global.registered = true;
  app.start();

  // Récupérez le store Redux de l'application
  const store = app._store;

  // HOC pour fournir le store Redux à l'application React
  app.start = (container) => () =>
    <Provider store={store}>{container}</Provider>;

  // Retourne l'application Dva
  return app;
}
