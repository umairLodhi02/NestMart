import React from "react";
import { ACTIVITY_TAG } from "../utils/constants";
import UrlArgsBundle from "../core/url_args_bundle";
import Home from "../Screens/Home/Home";
import { withRouter } from "react-router-dom";
import NotFound from "../Screens/NotFound/NotFound";
class NestRoutes extends React.Component {
  render() {
    const urlArgsBundle = new UrlArgsBundle().prepareFrom(
      this.props.location.search
    );

    if (urlArgsBundle.hasActivityTag()) {
      let activityTag = urlArgsBundle.getActivityTag();
      if (activityTag === ACTIVITY_TAG.HOME) {
        return <Home />;
      } else {
        return <NotFound />;
      }
    } else {
      urlArgsBundle.setActivityTag(ACTIVITY_TAG.HOME);
      this.props.history.push(urlArgsBundle.getArgsAsUrlParams());
    }

    return <></>;
  }
}

export default withRouter(NestRoutes);
