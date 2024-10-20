"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "src/utils/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] p-1", // Fondo con gradiente
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out", // Mejor padding y transición suave
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6BA8A] focus-visible:ring-offset-2", // Efecto de foco
      "disabled:pointer-events-none disabled:opacity-50", // Deshabilitado
      "data-[state=active]:bg-white data-[state=active]:text-[#4A3F35] data-[state=active]:shadow-lg", // Estilo activo
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 p-4 rounded-lg bg-white shadow-md", // Fondo y sombra para el contenido
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6BA8A] focus-visible:ring-offset-2", // Foco en el contenido
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
