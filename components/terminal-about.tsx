"use client"

import { useState, useEffect } from "react"

interface Command {
  command: string
  output: string
}

export function TerminalAbout() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentCommandText, setCurrentCommandText] = useState("")
  const [currentOutputText, setCurrentOutputText] = useState("")
  const [isTypingCommand, setIsTypingCommand] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  const commands: Command[] = [
    { command: "$ whoami", output: "AI Automation Engineer" },
    { command: "$ stack", output: "n8n • python • LLMs • API • Prompt Engineering" },
    { command: "$ mission", output: "Automate workflows with scalable AI systems" },
  ]

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    const currentCommand = commands[currentCommandIndex]

    if (isTypingCommand) {
      // Type command
      if (currentCommandText.length < currentCommand.command.length) {
        const timer = setTimeout(() => {
          setCurrentCommandText(currentCommand.command.slice(0, currentCommandText.length + 1))
        }, 100)
        return () => clearTimeout(timer)
      } else {
        // Finished typing command, move to output
        const timer = setTimeout(() => {
          setIsTypingCommand(false)
        }, 300)
        return () => clearTimeout(timer)
      }
    } else {
      // Type output
      if (currentOutputText.length < currentCommand.output.length) {
        const timer = setTimeout(() => {
          setCurrentOutputText(currentCommand.output.slice(0, currentOutputText.length + 1))
        }, 50)
        return () => clearTimeout(timer)
      } else {
        // Finished typing output, move to next command after pause
        const timer = setTimeout(() => {
          const nextIndex = (currentCommandIndex + 1) % commands.length
          setCurrentCommandIndex(nextIndex)
          setCurrentCommandText("")
          setCurrentOutputText("")
          setIsTypingCommand(true)
        }, 2000)
        return () => clearTimeout(timer)
      }
    }
  }, [currentCommandText, currentOutputText, isTypingCommand, currentCommandIndex])

  return (
    <div className="w-full h-full bg-zinc-950 rounded-lg overflow-hidden shadow-2xl border border-zinc-800">
      {/* Terminal Header */}
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-zinc-500 ml-3 font-mono">norman@portfolio:~</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm min-h-[400px] flex flex-col">
        {/* Previous commands (completed) */}
        {commands.slice(0, currentCommandIndex).map((cmd, idx) => (
          <div key={idx} className="mb-4">
            <div className="text-green-400 mb-1">{cmd.command}</div>
            <div className="text-zinc-300">{cmd.output}</div>
          </div>
        ))}

        {/* Current command being typed */}
        <div className="mb-4">
          <div className="text-green-400 mb-1">
            {currentCommandText}
            {isTypingCommand && showCursor && <span className="bg-green-400 text-green-400">_</span>}
          </div>
          {!isTypingCommand && (
            <div className="text-zinc-300">
              {currentOutputText}
              {showCursor && <span className="bg-zinc-300 text-zinc-300">_</span>}
            </div>
          )}
        </div>

        {/* Empty prompt with cursor */}
        {currentOutputText === commands[currentCommandIndex]?.output && (
          <div className="text-green-400 mt-2">
            $<span className="ml-1">{showCursor && <span className="bg-green-400 text-green-400">_</span>}</span>
          </div>
        )}
      </div>
    </div>
  )
}
