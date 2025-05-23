import { Meta, StoryObj } from "@storybook/react"
import { EventsTimeline } from "../index"
import eventsTimelineData from "./mockedData/eventsTimelineData"

const meta: Meta<typeof EventsTimeline> = {
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
}

export default meta

type Story = StoryObj<typeof EventsTimeline>

export const Default: Story = {
  parameters: {
    docs: {
      storyDescription: "Timeline of collapsible events."
    }
  },
  args: {
    events: eventsTimelineData,
    spacingHorizontal: 6,
    hasTransparentBackground: false,
    prefixUrl: "https://acc.wonen.zaken.amsterdam.nl/zaken/"
  }
}
