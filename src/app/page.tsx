import { FC } from "react"

import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Template",
	description: "Welcome to Next.js",
}

const Page: FC = () => (
	<>
		<span>Hello World</span>
	</>
)

export default Page
