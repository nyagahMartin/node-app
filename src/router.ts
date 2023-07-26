import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';

const router = Router();

/**
 * product
 */
router.get('/product', (req, res) => {
	res.json({
		message: 'message',
	});
});
router.get('/product/:id', () => {});
router.put(
	'/product/:id',
	body('name').isString(),
	handleInputErrors,
	(req, res) => {}
);
router.post('/product', () => {});
router.delete('/product/:id', () => {});

/**
 * updates
 */
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update', () => {});
router.delete('/update/:id', () => {});

/**
 * updatepoint
 */
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id', () => {});
router.post('/updatepoint', () => {});
router.delete('/updatepoint/:id', () => {});

export default router;
