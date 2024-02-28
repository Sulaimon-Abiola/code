const data = [
	{
		id: 'jgvwLHdhVaRr',
		style: {
			backgroundColor: '#ffffff',
			width: '100%',
			height: '500px',
			position: 'relative',
			display: 'flex',
		},
		children: [],
		columns: [
			{
				id: 'tnGTnuKSExsz',
				meta: {},
				children: [
					{
						id: 'rNovPYaTJaSF',
						content: 'Heading 666',
						formattedContent: 'Heading 666',
						ownHtml: '',
						component: 'smtext',
						style: {
							width: '338px',
							position: 'absolute',
							paddingLeft: '0.25rem',
							paddingRight: '0.25rem',
							fontSize: '48px',
							overflowWrap: 'break-word',
							minHeight: '72px',
							left: '14.285714285714285%',
							top: '75px',
						},
						meta: {
							containerStyle: {},
							lineHeight: 1.5,
						},
						hasInitMobileVersion: false,
						mobileVersion: {
							id: 'rNovPYaTJaSF',
							content: 'Heading 1',
							formattedContent: 'Heading 1',
							ownHtml: '',
							component: 'smtext',
							style: {
								width: '100%',
								position: 'relative',
								paddingLeft: '0.25rem',
								paddingRight: '0.25rem',
								fontSize: '48px',
								overflowWrap: 'break-word',
								minHeight: '80px',
								left: '-2.4096385542168677%',
								top: '356px',
								marginBottom: '15px',
								height: 'auto',
								textAlign: 'left !important',
							},
							meta: {
								containerStyle: {},
								lineHeight: 1.5,
							},
							hasInitMobileVersion: false,
						},
					},
					{
						id: 'pZjSdddtxoXBqVp',
						imageUrl:
							'https://unsplash.com/photos/q10VITrVYUM/download?ixid=M3w0MDAxNzR8MHwxfHNlYXJjaHw0fHxTdG9jayUyMFBob3Rvc3xlbnwwfHx8fDE3MDkwMzcxNTN8MA',
						meta: { aspectRatio: 1.333530106257379, maintainAspectratio: false },
						imageFilter: { filter: 'none' },
						animation: { animation: 'none', animationDelay: '0s' },
						component: 'smimage',
						ownHtml: '',
						style: {
							position: 'absolute',
							width: '31.820935966554753%',
							height: '282.9666748046875px',
							left: '3.83763368141126',
							top: '23',
						},
						hasInitMobileVersion: false,
						mobileVersion: {
							id: 'pZjStxoXBqVp',
							imageUrl:
								'https://unsplash.com/photos/q10VITrVYUM/download?ixid=M3w0MDAxNzR8MHwxfHNlYXJjaHw0fHxTdG9jayUyMFBob3Rvc3xlbnwwfHx8fDE3MDkwMzcxNTN8MA',
							meta: [],
							imageFilter: [],
							animation: [],
							component: 'smimage',
							ownHtml: '',
							style: [],
							hasInitMobileVersion: false,
						},
					},
					{
						id: 'pZjStxoXBqVp',
						imageUrl:
							'https://unsplash.com/photos/q10VITrVYUM/download?ixid=M3w0MDAxNzR8MHwxfHNlYXJjaHw0fHxTdG9jayUyMFBob3Rvc3xlbnwwfHx8fDE3MDkwMzcxNTN8MA',
						meta: {
							aspectRatio: 1.333530106257379,
							maintainAspectratio: false,
						},
						imageFilter: {
							filter: 'none',
						},
						animation: {
							animation: 'none',
							animationDelay: '0s',
						},
						component: 'smimage',
						ownHtml: '',
						style: {
							position: 'absolute',
							width: '31.820935966554753%',
							height: '282.9666748046875px',
							left: '14.83763368141126%',
							top: '163px',
						},
						hasInitMobileVersion: false,
						mobileVersion: {
							id: 'pZjStxoXBqVp',
							imageUrl:
								'https://unsplash.com/photos/q10VITrVYUM/download?ixid=M3w0MDAxNzR8MHwxfHNlYXJjaHw0fHxTdG9jayUyMFBob3Rvc3xlbnwwfHx8fDE3MDkwMzcxNTN8MA',
							meta: {
								aspectRatio: 1.333530106257379,
								maintainAspectratio: false,
							},
							imageFilter: {
								filter: 'none',
							},
							animation: {
								animation: 'none',
								animationDelay: '0s',
							},
							component: 'smimage',
							ownHtml: '',
							style: {
								position: 'relative',
								width: '100%',
								height: 'auto',
								left: '-2.0080321285140563%',
								top: '-88px',
								marginBottom: '15px',
							},
							hasInitMobileVersion: false,
						},
					},
				],
			},
		],
		component: 'column',
		ownHtml: '',
		style: {
			position: 'relative',
			height: '100%',
			flexBasis: '50%',
		},
		isHighlighted: false,
	},
	{
		id: 'EHEfmVCsOljT',
		meta: {},
		children: [],
		component: 'column',
		ownHtml: '',
		style: {
			position: 'relative',
			height: '100%',
			flexBasis: '50%',
		},
		isHighlighted: false,
	},
]

function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj))
}

function sortElementsByPosition(elements) {
	elements.sort((a, b) => {
		const aLeft = parseFloat(a.style.left)
		const bLeft = parseFloat(b.style.left)
		const aTop = parseFloat(a.style.top)
		const bTop = parseFloat(b.style.top)

		if (aTop === bTop) {
			return aLeft - bLeft
		}
		return aTop - bTop
	})

	return elements
}

function sortBlocks(blocks) {
	return blocks.map((block) => {
		const currentBlock = deepCopy(block)

		currentBlock?.columns?.forEach((column, index) => {
			const currentColumn = deepCopy(column)

			currentBlock['columns'][index]['children'] = sortElementsByPosition(
				currentColumn['children']
			)
		})

		return deepCopy(currentBlock)
	})
}

console.log(sortBlocks(data))
