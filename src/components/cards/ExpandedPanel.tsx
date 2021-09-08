import React, { ReactNode } from "react"
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"


export interface ExpandedPanelItem {
  title : ReactNode
  content : ReactNode
  hide? : boolean
}

export interface ExpandedPanelProps {
  /**
   * List of expanded panels
   */
  panels : Array<ExpandedPanelItem>
}

export const ExpandedPanel = ({ panels }: ExpandedPanelProps): JSX.Element => {

  return (
    <div>
      {panels.filter((p: ExpandedPanelItem) => !p.hide)
        .map(((panel: ExpandedPanelItem, index: number) => (
          <Accordion
            key={`panel_${index}`}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              {panel.title}
            </AccordionSummary>
            <AccordionDetails>
              {panel.content}
            </AccordionDetails>
          </Accordion>
        )))}
    </div>
  )
}
