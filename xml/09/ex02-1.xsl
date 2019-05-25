<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/TR/WD-xsl">
<xsl:template  match="/">
<P><B><xsl:value-of select="//car/@caption"/></B>
<xsl:value-of select="//car/@marka"/>.
<xsl:value-of select="//car/carInfo/@number"/>,
<xsl:value-of select="//carInfo/@color"/>.</P>
</xsl:template>
</xsl:stylesheet>
