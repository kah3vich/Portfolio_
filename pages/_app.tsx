import { AppProps } from 'next/app'
import Fonts from '../components/Fonts'
import '../styles/globals.scss'
import Main from '../components/layout/Main'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SceneTJ from '../components/SceneTJ'
import { AnimatePresence, motion } from 'framer-motion'
import NextNProgress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
	<Main>
		<Fonts />
		<main>
			<NextNProgress
				color='#81e6d9'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={false}
			/>
			<Header />
			<SceneTJ />
			<AnimatePresence>
				<motion.div
					key={router.route}
					initial='pageInitial'
					animate='pageAnimation'
					exit='pageExit'
					variants={{
						pageInitial: {
							opacity: 0,
						},
						pageAnimation: {
							opacity: 1,
						},
						pageExit: {
							opacity: 0,
						},
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
			<Footer />
		</main>
	</Main>
)

export default MyApp
