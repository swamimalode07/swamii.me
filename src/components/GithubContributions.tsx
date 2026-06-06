import { Suspense } from "react"

import { cn } from "@/lib/utils"
import {
    GitHubContributions,
    GitHubContributionsFallback,
} from "@/components/github-contributions"
import { getCachedContributions } from "@/lib/get-cached-contributions"

const GITHUB_USERNAME = "swamimalode07"
const GITHUB_PROFILE_URL = "https://github.com/swamimalode07"

export default function GitHubContributionsDefaultTheme() {
    const contributions = getCachedContributions(GITHUB_USERNAME)

    return (
        <Suspense fallback={<GitHubContributionsFallback />}>
            <GitHubContributions
                contributions={contributions}
                githubProfileUrl={GITHUB_PROFILE_URL}
                className={cn(
                    '**:data-[level="0"]:fill-[#383838]',
                    '**:data-[level="1"]:fill-[#5c5c5d]',
                    '**:data-[level="2"]:fill-[#838383]',
                    '**:data-[level="3"]:fill-[#868689]',
                    '**:data-[level="4"]:fill-[#fafafa]'
                )}
            />
        </Suspense>
    )
}
