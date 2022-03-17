import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import { EventsTimeline } from "../index"
import eventsTimelineData from "./mockedData/eventsTimelineData"

export default {
  title: "EventsTimeline",
  component: EventsTimeline,
  argTypes: {
    events: {
      table: {
        type: { summary: "Array of objects" }
      }
    },
    hasTransparentBackground: {
      description: "Default is a grey background"
    }
  }
} as Meta

const StoryComponent: Story<ComponentProps<typeof EventsTimeline>> = (args) => <EventsTimeline {...args} />

export const Default = StoryComponent.bind({})
Default.parameters =  {
  docs: {
    storyDescription: "Timeline of collapsible events."
  }
}
Default.args = {
  events: eventsTimelineData,
  spacingHorizontal: 6,
  hasTransparentBackground: false,
  prefixUrl: "https://acc.wonen.zaken.amsterdam.nl/zaken/"
}
