<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'
</script>

<div class="p-4">
<Footer>
  <FooterCopyright 
    spanClass="block text-sm text-gray-500 text-center dark:text-gray-400"
    href="/" by="Restaurant™" year={2022} />
  <FooterLinkGroup ulClass="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
</div>

