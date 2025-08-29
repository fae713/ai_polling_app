import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Poll } from "../page"

// Mock data - this would normally come from an API or database
const mockPolls: Record<string, Poll> = {
  "1": {
    id: "1",
    title: "Favorite Programming Language",
    description: "What's your preferred programming language?",
    options: ["JavaScript", "Python", "Java", "TypeScript"],
    votes: {
      "JavaScript": 5,
      "Python": 3,
      "Java": 2,
      "TypeScript": 7
    },
    createdAt: "2025-08-29T10:00:00Z",
    createdBy: "user123"
  },
  "2": {
    id: "2",
    title: "Best Frontend Framework",
    description: "Which frontend framework do you prefer for web development?",
    options: ["React", "Vue", "Angular", "Svelte"],
    votes: {
      "React": 10,
      "Vue": 4,
      "Angular": 3,
      "Svelte": 5
    },
    createdAt: "2025-08-29T11:00:00Z",
    createdBy: "user123"
  }
}

export default function PollPage({ params }: { params: { id: string } }) {
  const poll = mockPolls[params.id]
  const totalVotes = Object.values(poll.votes).reduce((a, b) => a + b, 0)

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/polls">
            <Button variant="outline">← Back to Polls</Button>
          </Link>
          <h1 className="text-3xl font-bold">Poll Results</h1>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">{poll.title}</h2>
            <p className="text-muted-foreground">{poll.description}</p>
            <div className="mt-2 text-sm text-muted-foreground">
              Created on {new Date(poll.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="space-y-4">
            {poll.options.map((option) => {
              const votes = poll.votes[option]
              const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0
              
              return (
                <div key={option} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{option}</span>
                    <span className="text-sm text-muted-foreground">
                      {votes} votes ({percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Cast Your Vote</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                {poll.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 p-3 rounded-lg border hover:bg-accent cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="vote"
                      value={option}
                      className="rounded-full"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <Button type="submit">Submit Vote</Button>
            </form>
          </div>

          <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
            <p>Total votes: {totalVotes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
