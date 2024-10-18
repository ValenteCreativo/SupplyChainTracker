"use client"

import * as React from "react"
import { AxisBottom, AxisLeft } from "@visx/axis"
import { Grid } from "@visx/grid"
import { Group } from "@visx/group"
import { scaleBand, scaleLinear } from "@visx/scale"
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip"
import { localPoint } from '@visx/event'

interface ChartData {
  [key: string]: number | string
}

interface ChartProps {
  data: ChartData[]
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

const defaultMargin = { top: 20, right: 20, bottom: 40, left: 40 }

export const Chart: React.FC<ChartProps> = ({
  data,
  width,
  height,
  margin = defaultMargin,
}) => {
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const xScale = scaleBand<string>({
    range: [0, xMax],
    round: true,
    domain: data.map((d) => d.name as string),
    padding: 0.4,
  })

  const yScale = scaleLinear<number>({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map((d) => d.value as number))],
  })

  const { tooltipData, tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } =
    useTooltip()

  const { TooltipInPortal } = useTooltipInPortal({
    scroll: true,
    detectBounds: true,
  })

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax}
            stroke="black"
            strokeOpacity={0.1}
            xOffset={xScale.bandwidth() / 2}
          />
          <AxisBottom
            top={yMax}
            scale={xScale}
            tickLabelProps={() => ({
              fill: "black",
              fontSize: 11,
              textAnchor: "middle",
            })}
          />
          <AxisLeft
            scale={yScale}
            tickLabelProps={() => ({
              fill: "black",
              fontSize: 11,
              textAnchor: "end",
              dy: "0.33em",
            })}
          />
          {data.map((d) => {
            const barHeight = yMax - (yScale(d.value as number) ?? 0)
            return (
              <Group key={`bar-${d.name}`}>
                <rect
                  x={xScale(d.name as string)}
                  y={yMax - barHeight}
                  width={xScale.bandwidth()}
                  height={barHeight}
                  fill="rgba(23, 233, 217, .5)"
                  onMouseLeave={() => hideTooltip()}
                  onMouseMove={(event) => {
                    const eventSvgCoords = localPoint(event)
                    showTooltip({
                      tooltipData: d,
                      tooltipTop: eventSvgCoords?.y,
                      tooltipLeft: eventSvgCoords?.x,
                    })
                  }}
                />
              </Group>
            )
          })}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          style={defaultStyles}
        >
          <strong>{(tooltipData as ChartData).name}</strong>
          <br />
          {(tooltipData as ChartData).value}
        </TooltipInPortal>
      )}
    </div>
  )
}

export const ChartContainer: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>
}

export const ChartTooltip: React.FC = () => null