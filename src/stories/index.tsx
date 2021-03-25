import React from "react"
import { storiesOf } from "@storybook/react"
import Timeline from "../components/timeline/Timeline/Timeline"

storiesOf("Timeline", module).add("Met zaak-ID", () => (
  <Timeline caseId={1234} />
))
storiesOf("Timeline", module).add("Zonder zaak-ID", () => (
  <Timeline />
))
