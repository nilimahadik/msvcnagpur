import EventsPage from "@/components/EventsPage/EventsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Events = () => {
  return (
    <Layout pageTitle="Events">
      <PageHeader pageTitle="Events" />
      <EventsPage />
    </Layout>
  );
};

export default Events;
