function generateAffiliateLink() {
    const productLink = document.getElementById("product-link").value;
    const affiliateTag = "rapdeal-rv-21";
    const affiliateLink = `${productLink}?tag=${affiliateTag}`;
    document.getElementById("affiliate-link").innerHTML = affiliateLink;
}

function clearFields() {
    document.getElementById("product-link").value = "";
    document.getElementById("affiliate-link").innerHTML = "";
}

function copyToClipboard() {
    const affiliateLink = document.getElementById("affiliate-link");
    const el = document.createElement('textarea');
    el.value = affiliateLink.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Affiliate link copied to clipboard!');
}
