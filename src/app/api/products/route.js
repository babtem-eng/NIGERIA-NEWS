import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://gloxmart.com/products.json', {
      next: { revalidate: 3600 } // Cache for an hour to avoid spamming the Shopify endpoint
    });
    
    if (!res.ok) {
        throw new Error(`Failed to fetch from shopify: ${res.status}`);
    }
    
    const data = await res.json();
    return NextResponse.json({ success: true, products: data.products });
  } catch (error) {
    console.error('API /api/products error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}
