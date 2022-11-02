import { DataQuery } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import React from "react";
import "./App.css";
import * as core from "@app/core";
import * as shared from "@app/shared";
const query = {
  me: {
    resource: "me",
  },
};

const MyApp = () => (
  <div className="container">
    <DataQuery query={query}>
      {({ error, loading, data }) => {
        const me: any = data?.me;
        if (error) return <span>ERROR</span>;
        if (loading) return <span>...</span>;
        return (
          <>
            <h1>{i18n.t("Hello {{name}}", { name: me?.name })}</h1>
            <h3>{i18n.t("Welcome to DHIS2!")}</h3>
          </>
        );
      }}
    </DataQuery>
  </div>
);

export default MyApp;
