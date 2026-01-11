import { useState } from 'react';

function Store() {
	const [cart, setCart] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');

	const products = [
		{ id: 1, name: 'Ballot Fighter T-Shirt', price: 450, category: 'apparel', image: '👕', stock: 500 },
		{ id: 2, name: 'Campaign Cap', price: 250, category: 'apparel', image: '🧢', stock: 300 },
		{ id: 3, name: 'Election Banner (3x5 ft)', price: 350, category: 'campaign', image: '🏴', stock: 200 },
		{ id: 4, name: 'Alliance Flag', price: 300, category: 'campaign', image: '🚩', stock: 400 },
		{ id: 5, name: 'Support Badge (Pack of 10)', price: 150, category: 'accessories', image: '📌', stock: 1000 },
		{ id: 6, name: 'Sticker Set (50 pcs)', price: 200, category: 'accessories', image: '🎯', stock: 800 },
		{ id: 7, name: 'Manifesto Book', price: 100, category: 'literature', image: '📚', stock: 5000 },
		{ id: 8, name: 'Campaign Poster Set', price: 180, category: 'campaign', image: '🖼️', stock: 600 },
		{ id: 9, name: 'Hoodie', price: 850, category: 'apparel', image: '🧥', stock: 250 },
		{ id: 10, name: 'Water Bottle', price: 200, category: 'accessories', image: '💧', stock: 400 },
		{ id: 11, name: 'Tote Bag', price: 300, category: 'accessories', image: '👜', stock: 350 },
		{ id: 12, name: 'Wristband (Pack of 5)', price: 120, category: 'accessories', image: '⌚', stock: 900 }
	];

	const categories = [
		{ id: 'all', name: 'All Products', icon: '🛍️' },
		{ id: 'apparel', name: 'Apparel', icon: '👕' },
		{ id: 'campaign', name: 'Campaign Materials', icon: '📢' },
		{ id: 'accessories', name: 'Accessories', icon: '🎯' },
		{ id: 'literature', name: 'Literature', icon: '📚' }
	];

	const filteredProducts = selectedCategory === 'all'
		? products
		: products.filter(p => p.category === selectedCategory);

	const addToCart = (product) => {
		const existing = cart.find(item => item.id === product.id);
		if (existing) {
			setCart(cart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			));
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	const getTotalAmount = () => {
		return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
	};

	return (
		<section className="store section">
			<div className="container">
				<div className="section-title">
					<h2>Election Store</h2>
					<p>Get official campaign merchandise and support the movement</p>
				</div>

				<div className="store-info">
					<div className="info-box">
						<span className="info-icon">✅</span>
						<div>
							<strong>Official Merchandise</strong>
							<p>All products are officially licensed</p>
						</div>
					</div>
					<div className="info-box">
						<span className="info-icon">🚚</span>
						<div>
							<strong>Nationwide Delivery</strong>
							<p>Free shipping on orders above ৳1000</p>
						</div>
					</div>
					<div className="info-box">
						<span className="info-icon">💰</span>
						<div>
							<strong>Support the Campaign</strong>
							<p>Proceeds fund grassroots activities</p>
						</div>
					</div>
				</div>

				<div className="category-tabs">
					{categories.map(cat => (
						<button
							key={cat.id}
							className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
							onClick={() => setSelectedCategory(cat.id)}
						>
							<span>{cat.icon}</span>
							{cat.name}
						</button>
					))}
				</div>

				<div className="store-layout">
					<div className="products-grid">
						{filteredProducts.map(product => (
							<div key={product.id} className="product-card">
								<div className="product-image">{product.image}</div>
								<div className="product-info">
									<h4>{product.name}</h4>
									<div className="product-price">৳{product.price}</div>
									<div className="product-stock">
										{product.stock > 0 ? (
											<span className="in-stock">✓ In Stock ({product.stock})</span>
										) : (
											<span className="out-stock">✗ Out of Stock</span>
										)}
									</div>
									<button
										className="btn-add-cart"
										onClick={() => addToCart(product)}
										disabled={product.stock === 0}
									>
										Add to Cart
									</button>
								</div>
							</div>
						))}
					</div>

					<div className="cart-sidebar">
						<h3>Shopping Cart ({cart.length})</h3>
						{cart.length === 0 ? (
							<p className="empty-cart">Your cart is empty</p>
						) : (
							<>
								<div className="cart-items">
									{cart.map(item => (
										<div key={item.id} className="cart-item">
											<span className="cart-item-icon">{item.image}</span>
											<div className="cart-item-details">
												<div className="cart-item-name">{item.name}</div>
												<div className="cart-item-price">৳{item.price} × {item.quantity}</div>
											</div>
											<div className="cart-item-total">৳{item.price * item.quantity}</div>
										</div>
									))}
								</div>
								<div className="cart-summary">
									<div className="summary-row">
										<span>Subtotal:</span>
										<strong>৳{getTotalAmount()}</strong>
									</div>
									<div className="summary-row">
										<span>Delivery:</span>
										<strong>{getTotalAmount() >= 1000 ? 'FREE' : '৳60'}</strong>
									</div>
									<div className="summary-row total">
										<span>Total:</span>
										<strong>৳{getTotalAmount() >= 1000 ? getTotalAmount() : getTotalAmount() + 60}</strong>
									</div>
									<button className="btn btn-primary checkout-btn">
										Proceed to Checkout
									</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Store;
