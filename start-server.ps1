# PowerShell Lightweight Web Server for KeralaHire
$port = 8080
$prefix = "http://localhost:$port/"

# Initialize HTTP Listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "🌴 KeralaHire local server active at: $prefix"
    Write-Host "Press Ctrl+C to terminate the server."

    # Keep listening for requests
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Determine target file path
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        # Match local file path
        $localFile = Join-Path "d:\job" $urlPath.Replace("/", "\")

        if (Test-Path $localFile -PathType Leaf) {
            # Set appropriate MIME Type content response
            if ($localFile.EndsWith(".html")) { $response.ContentType = "text/html" }
            elseif ($localFile.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($localFile.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            elseif ($localFile.EndsWith(".png")) { $response.ContentType = "image/png" }
            elseif ($localFile.EndsWith(".jpg") -or $localFile.EndsWith(".jpeg")) { $response.ContentType = "image/jpeg" }

            $bytes = [System.IO.File]::ReadAllBytes($localFile)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File Not Found on KeralaHire Local Host")
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    }
} catch {
    Write-Host "Error starting server: $_"
} finally {
    $listener.Close()
}
