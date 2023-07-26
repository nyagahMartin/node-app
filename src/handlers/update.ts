import prisma from '../db';

export const getUpdates = async (req, res) => {
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});
	const updates = products.reduce((allUpdates, product) => {
		return [...allUpdates, ...product.updates];
	}, []);
	res.json({ data: updates });
};

export const createUpdate = async (req, res) => {
	const product = await prisma.product.findUnique({
		where: { id: req.body.productId },
	});
	if (!product) {
		return res.json({ message: 'please create a product' });
	}
	const update = await prisma.update.create({
		data: req.body,
	});
	res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
	const products = await prisma.product.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			updates: true,
		},
	});
	const updates = products.reduce((allUpdates, product) => {
		return [...allUpdates, ...product.updates];
	}, []);

	const match = updates.find((update) => update.id === req.params.id);

	if (!match) {
		res.json({ message: 'no updates' });
	}

	const updatedUpdate = await prisma.update.update({
		where: {
			id: req.params.id,
		},
		data: req.body,
	});
};
