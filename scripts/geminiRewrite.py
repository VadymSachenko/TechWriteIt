import os
import sys
import json

# Google GenAI library
from google import genai
from google.genai import types

def main():
    # 1. Read the entire text from stdin
    article_text = sys.stdin.read().strip()

    # 2. Check for the GEMINI_API_KEY environment variable
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY environment variable not set.")
        sys.exit(1)

    # 3. Create a GenAI client for the Gemini model
    client = genai.Client(api_key=api_key)

    # 4. Build the request to generate text
    model_name = "gemini-2.0-flash"

    # We'll pass the entire article text as user role
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text=article_text)
            ]
        )
    ]

    generate_content_config = types.GenerateContentConfig(
        temperature=1,
        top_p=0.95,
        top_k=40,
        max_output_tokens=8192,
        response_mime_type="text/plain",
        system_instruction=[
            types.Part.from_text(text="""Write a Telegram post based on the above article text. 
It must be a catchy post to make users click the link to read the full article.
Use emojis, bolding, italics, links, etc. Post length ~7–10 sentences.
The Telegram channel is mine, so the post should sound like the channel owner is talking to the audience.
"""),
        ],
    )

    # 5. Stream the response in chunks
    output_strings = []
    for chunk in client.models.generate_content_stream(
        model=model_name,
        contents=contents,
        config=generate_content_config,
    ):
        output_strings.append(chunk.text)

    # 6. Print the final text to stdout
    print("".join(output_strings))

if __name__ == "__main__":
    main()
