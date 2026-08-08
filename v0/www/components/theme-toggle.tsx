"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Both icons render; CSS picks one per mode, so server and client
         markup match and there is no hydration flash. */}
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}

export { ThemeToggle }
