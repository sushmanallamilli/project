import {Anchor} from '@mantine/core'
import {Link} from '@remix-run/react'
import {TailwindContainer} from '~/components/TailwindContainer'
import {useAppData} from '~/utils/hooks'

export default function Dashboard() {
	const {products} = useAppData()

	return (
		<div className="flex flex-col gap-4 p-4">
			<div className="bg-white">
				<TailwindContainer>
					<div className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
						<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
							Products
						</h2>

						<div className="-mx-px mt-12 grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
							{products.map(product => (
								<div
									key={product.id}
									className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
								>
									<div className="aspect-square h-48 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
										<img
											src={product.image}
											alt={product.name}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<div className="pt-10 pb-4 text-center">
										<h3 className="text-sm font-medium text-gray-900">
											<Anchor
												to={`/product/${product.slug}`}
												prefetch="intent"
												component={Link}
											>
												{product.name}
											</Anchor>
										</h3>
										<p className="mt-4 text-base font-medium text-gray-900">
											${product.price.toFixed(2)}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</TailwindContainer>
			</div>
		</div>
	)
}
