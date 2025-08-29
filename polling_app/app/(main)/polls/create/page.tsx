import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Create Poll",
  description: "Create a new poll",
}

export default function CreatePollPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/polls">
          <Button variant="outline">← Back to Polls</Button>
        </Link>
        <h1 className="text-3xl font-bold">Create a New Poll</h1>
      </div>

      <div className="max-w-2xl">
        <form className="space-y-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Poll Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your question"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full p-2 border rounded-md"
                placeholder="Provide additional context for your poll"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Poll Options
              </label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="options[0]"
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Option 1"
                    required
                  />
                  <Button type="button" variant="outline">Remove</Button>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="options[1]"
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Option 2"
                    required
                  />
                  <Button type="button" variant="outline">Remove</Button>
                </div>
              </div>
              <Button 
                type="button" 
                variant="outline" 
                className="mt-2"
              >
                + Add Option
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Poll Settings
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="allowMultipleVotes"
                    className="rounded"
                  />
                  <span>Allow multiple votes per user</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="showResultsBeforeVoting"
                    className="rounded"
                  />
                  <span>Show results before voting</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit">Create Poll</Button>
            <Button type="button" variant="outline">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
