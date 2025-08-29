import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Polls",
  description: "View all polls",
}

export type Poll = {
  id: string
  title: string
  description: string
  options: string[]
  votes: Record<string, number>
  createdAt: string
  createdBy: string
}

// Temporary mock data
const mockPolls: Poll[] = [
  {
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
  {
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
]

export default function PollsPage() {
  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Polls</h1>
        <Link href="/polls/create">
          <Button>Create New Poll</Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {mockPolls.map((poll) => (
          <div
            key={poll.id}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{poll.title}</h2>
                <p className="text-muted-foreground">{poll.description}</p>
              </div>
              <Link href={`/polls/${poll.id}`}>
                <Button variant="outline">View Results</Button>
              </Link>
            </div>

            <div className="grid gap-2">
              {poll.options.map((option) => (
                <div
                  key={option}
                  className="flex justify-between items-center p-3 bg-secondary/50 rounded"
                >
                  <span>{option}</span>
                  <span className="text-sm text-muted-foreground">
                    {poll.votes[option]} votes
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Created on {new Date(poll.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
