// Docs navigation menu structure
export const DOCS_MENU = [
    {
        id: "about",
        label: "Mizan Servisi Hakkında",
        path: "/how-to-use",
        iconName: "BookOpen",
    },
    {
        id: "authentication",
        label: "Kimlik Doğrulama",
        path: "/how-to-use/authentication",
        iconName: "KeyRound",
    },
    {
        id: "errors",
        label: "Hatalar",
        path: "/how-to-use/errors",
        iconName: "AlertTriangle",
    },
    {
        id: "metadata",
        label: "Meta Veriler",
        path: "/how-to-use/metadata",
        iconName: "Braces",
    },
    {
        id: "versioning",
        label: "Sürümleme",
        path: "/how-to-use/versioning",
        iconName: "GitBranch",
    },
];

// Base URL for the Mizan API
export const MIZAN_BASE_URL = "https://mizanservis.trt.net.tr";

// Authentication code samples for 4 languages
export const AUTH_CODE_SAMPLES: Record<string, { label: string; language: string; code: string }> = {
    curl: {
        label: "cURL",
        language: "bash",
        code: `curl ${MIZAN_BASE_URL}/v1/messages \\
     --header "x-api-key: $MIZAN_API_KEY" \\
     --header "content-type: application/json" \\
     --data '{
        "model": "mizan model-1",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Hello, Claude"}
        ]
     }'`,
    },
    python: {
        label: "Python",
        language: "python",
        code: `import requests

response = requests.post(
    "${MIZAN_BASE_URL}/v1/messages",
    headers={
        "x-api-key": "MIZAN_API_KEY_DEĞERINIZ",
        "content-type": "application/json",
    },
    json={
        "model": "mizan model-1",
        "max_tokens": 1024,
        "messages": [
            {"role": "user", "content": "Hello, Claude"}
        ],
    },
)

print(response.json())`,
    },
    typescript: {
        label: "TypeScript",
        language: "typescript",
        code: `const response = await fetch("${MIZAN_BASE_URL}/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": process.env.MIZAN_API_KEY!,
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: "mizan model-1",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Hello, Claude" },
    ],
  }),
});

const data = await response.json();
console.log(data);`,
    },
    java: {
        label: "Java",
        language: "java",
        code: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("${MIZAN_BASE_URL}/v1/messages"))
    .header("x-api-key", System.getenv("MIZAN_API_KEY"))
    .header("content-type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString("""
        {
            "model": "mizan model-1",
            "max_tokens": 1024,
            "messages": [
                {"role": "user", "content": "Hello, Claude"}
            ]
        }
        """))
    .build();

HttpResponse<String> response = client.send(
    request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());`,
    },
};

// HTTP status codes table
export const HTTP_STATUS_CODES = [
    { code: 200, label: "OK", description: "İstek başarılı." },
    { code: 400, label: "Bad Request", description: "İstek gövdesinde geçersiz veya eksik parametre bulundu." },
    { code: 401, label: "Unauthorized", description: "Geçersiz veya eksik API anahtarı." },
    { code: 403, label: "Forbidden", description: "API anahtarınız bu işlem için yetkili değil." },
    { code: 404, label: "Not Found", description: "İstenen kaynak bulunamadı." },
    { code: 429, label: "Too Many Requests", description: "İstek limiti aşıldı. Lütfen kısa bir süre bekleyip tekrar deneyin." },
    { code: 500, label: "Internal Server Error", description: "Sunucu tarafında beklenmedik bir hata oluştu." },
    { code: 529, label: "API Overloaded", description: "API geçici olarak aşırı yüklenmiş durumda." },
];

// Error types with descriptions (Stripe-like)
export const API_ERROR_TYPES = [
    {
        type: "api_error",
        statusCodes: "500",
        description: "API tarafında beklenmedik bir hata oluştu. Kısa süre sonra tekrar deneyin.",
    },
    {
        type: "authentication_error",
        statusCodes: "401",
        description: "Sağlanan API anahtarı geçersiz, süresi dolmuş veya iptal edilmiş.",
    },
    {
        type: "invalid_request_error",
        statusCodes: "400",
        description: "İstek gövdesinde eksik veya hatalı parametre bulunuyor.",
    },
    {
        type: "not_found_error",
        statusCodes: "404",
        description: "İstenen kaynak (endpoint veya model) bulunamadı.",
    },
    {
        type: "rate_limit_error",
        statusCodes: "429",
        description: "İstek limiti aşıldı. retry_after alanındaki süre kadar bekleyip tekrar deneyin.",
    },
    {
        type: "permission_error",
        statusCodes: "403",
        description: "API anahtarınız bu işlemi gerçekleştirmek için yeterli yetkiye sahip değil.",
    },
    {
        type: "overloaded_error",
        statusCodes: "529",
        description: "API geçici olarak aşırı yüklenmiş durumda. Kısa bir süre sonra tekrar deneyin.",
    },
];

// Error response example
export const ERROR_RESPONSE_EXAMPLE = {
    type: "error",
    error: {
        type: "authentication_error",
        message: "Geçersiz API anahtarı sağlandı.",
    },
};

// Metadata - request example
export const METADATA_REQUEST = {
    model: "mizan model-1",
    max_tokens: 1024,
    messages: [{ role: "user", content: "Hello, Claude" }],
};

// Metadata - response example
export const METADATA_RESPONSE = {
    id: "msg_01XFDUDYJgAACzvnptvVoYEL",
    type: "message",
    role: "assistant",
    content: [
        {
            type: "text",
            text: "Hello!",
        },
    ],
    model: "mizan model-1",
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: {
        input_tokens: 12,
        output_tokens: 6,
    },
};

// Request body parameters documentation
export const REQUEST_PARAMS = [
    { name: "model", type: "string", required: true, description: 'Kullanılacak model adı. Örn: "mizan model-1"' },
    { name: "max_tokens", type: "integer", required: true, description: "Yanıtta döndürülecek maksimum token sayısı." },
    { name: "messages", type: "array", required: true, description: "Mesaj nesnelerinden oluşan dizi. Her nesne role ve content alanlarını içerir." },
    { name: "messages[].role", type: "string", required: true, description: '"user" veya "assistant" değerini alır.' },
    { name: "messages[].content", type: "string", required: true, description: "Mesaj içeriği metni." },
];

// Response body parameters documentation
export const RESPONSE_PARAMS = [
    { name: "id", type: "string", description: "Benzersiz mesaj tanımlayıcısı." },
    { name: "type", type: "string", description: 'Yanıt türü. Her zaman "message" döner.' },
    { name: "role", type: "string", description: 'Yanıtlayan rolü. Her zaman "assistant" döner.' },
    { name: "content", type: "array", description: "Yanıt içerik blokları dizisi." },
    { name: "content[].type", type: "string", description: 'İçerik bloğu türü. Örn: "text"' },
    { name: "content[].text", type: "string", description: "Yanıt metin içeriği." },
    { name: "model", type: "string", description: "Kullanılan model adı." },
    { name: "stop_reason", type: "string", description: 'Yanıtın durma nedeni. Örn: "end_turn", "max_tokens"' },
    { name: "stop_sequence", type: "string | null", description: "Durma dizisi kullanıldıysa döner, aksi halde null." },
    { name: "usage", type: "object", description: "Token kullanım istatistikleri." },
    { name: "usage.input_tokens", type: "integer", description: "Giriş mesajındaki token sayısı." },
    { name: "usage.output_tokens", type: "integer", description: "Yanıtta üretilen token sayısı." },
];

// Versioning info
export const VERSION_COMPARISON = {
    v1: {
        version: "V1",
        baseUrl: `${MIZAN_BASE_URL}/v1/messages`,
        maxChars: 4096,
        status: "Aktif",
        description: "İlk kararlı sürüm. Temel metin analizi ve mesajlaşma desteği sunar.",
    },
    v2: {
        version: "V2",
        baseUrl: `${MIZAN_BASE_URL}/v2/messages`,
        maxChars: 8192,
        status: "Aktif",
        description: "Gelişmiş sürüm. Artırılmış karakter limiti ve iyileştirilmiş model performansı.",
    },
};
